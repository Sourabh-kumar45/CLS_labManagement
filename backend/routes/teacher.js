const express = require('express');
const router = express.Router();
const Teacher = require('../model/teacher');
const ComponentIssue = require('../model/componentIssue');
const nodemailer = require("nodemailer");

// Setting up nodemailer for email notifications
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.APP_PASSWORD,
  },
});

const sendMail = async (transporter, mail) => {
  try {
    await transporter.sendMail(mail);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Main route for the Teacher Dashboard
router.get('/', (req, res) => {
  res.send("This is the Teacher route");
});

// Fetching teacher details by ID
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const teacher = await Teacher.findById(id);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.json({
      id: teacher.id,
      name: teacher.name,
      email: teacher.email,
      department: teacher.department,
    });
  } catch (error) {
    console.error("Error fetching teacher:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Updating teacher details
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTeacher = await Teacher.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedTeacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    res.json(updatedTeacher);
  } catch (error) {
    console.error("Error updating teacher:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Fetching issued components for a teacher by ID
router.get('/:id/issues', async (req, res) => {
  const id = req.params.id;
  try {
    const issues = await ComponentIssue.find({ teacherId: id });

    if (!issues || issues.length === 0) {
      return res.status(404).json({ error: "No components issued" });
    }

    res.json(issues);
  } catch (error) {
    console.error("Error fetching issues:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Issuing components to a teacher
router.post('/:id/issues', async (req, res) => {
  const id = req.params.id;
  const issueDetails = req.body;
  try {
    const teacher = await Teacher.findById(id);

    if (!teacher) {
      return res.status(404).json({ error: "Teacher not found" });
    }

    const newIssue = new ComponentIssue({
      teacherId: id,
      components: issueDetails.components,
      issueDate: new Date(),
      returnStatus: "Not Returned",
    });

    const savedIssue = await newIssue.save();

    // Sending email notification
    const issueMail = {
      from: { name: "Component Lending System CLS", address: process.env.USER },
      to: [teacher.email],
      subject: `Components Issued`,
      html: `
        <h2>Component Issue Details</h2>
        <p><strong>Dear ${teacher.name},</strong><br>You have been issued the following components:</p>
        <ul>
          ${issueDetails.components.map(comp => `<li>${comp.item}: ${comp.quantity}</li>`).join('')}
        </ul>
        <p>Best Regards,</p>
        <p>CLS Team</p>
      `,
    };

    sendMail(transporter, issueMail);

    res.json(savedIssue);
  } catch (error) {
    console.error("Error issuing components:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Updating component issue details (e.g., marking as returned)
router.put('/:id/issues/:issueId', async (req, res) => {
  const { id, issueId } = req.params;
  const updateData = req.body;

  try {
    const updatedIssue = await ComponentIssue.findOneAndUpdate(
      { _id: issueId, teacherId: id },
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedIssue) {
      return res.status(404).json({ error: "Issue not found" });
    }

    // Sending email notification
    const teacher = await Teacher.findById(id);
    if (teacher) {
      const updateMail = {
        from: { name: "Component Lending System CLS", address: process.env.USER },
        to: [teacher.email],
        subject: `Component Issue Update`,
        html: `
          <h2>Component Issue Update</h2>
          <p><strong>Dear ${teacher.name},</strong><br>Your component issue status has been updated.</p>
          <p>Return Status: ${updateData.returnStatus}</p>
          <p>Best Regards,</p>
          <p>CLS Team</p>
        `,
      };

      sendMail(transporter, updateMail);
    }

    res.json(updatedIssue);
  } catch (error) {
    console.error("Error updating issue:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Logout route for teachers
router.post('/:id/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error("Error destroying session:", err);
        return res.status(500).json({ message: "Error logging out" });
      }
      res.clearCookie("connect.sid");
      res.status(200).json({ message: "Logged out successfully" });
    });
  } else {
    res.status(200).json({ message: "No active session to log out" });
  }
});

module.exports = router;
