import React from "react";

const Achievement = ({ studentName, achievements }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      <br /><br /><br /><br />
      <h1 className="text-4xl font-bold text-center mb-6">{studentName}'s Achievements</h1>
      <p className="text-center text-gray-600 mb-10">A showcase of {studentName}'s outstanding accomplishments.</p>

      <section>
        {achievements.length > 0 ? (
          <ul className="space-y-6">
            {achievements.map((achievement, index) => (
              <li
                key={index}
                className="p-4 bg-gray-100 rounded-md shadow-md hover:shadow-lg transition-shadow"
              >
                <h2 className="text-2xl font-semibold mb-2">{achievement.title}</h2>
                <p className="text-gray-700">{achievement.description}</p>
                <p className="text-sm text-gray-500 mt-2">Date: {achievement.date}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No achievements to display.</p>
        )}
      </section>
    </div>
  );
};

export default Achievement;


