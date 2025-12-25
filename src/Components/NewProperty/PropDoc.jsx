import React from 'react';

const PropDoc = ({ docs }) => {
  if (!docs.length) return null;

  return (
    <div className="px-4 space-y-3">
      <h3 className="font-semibold text-lg">Uploaded Documents</h3>

      <div className="flex flex-wrap gap-3">
        {docs.map((doc, index) => (
          <div
            key={index}
            className="px-3 py-2 border rounded-lg text-sm bg-gray-50"
          >
            📄 {doc.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropDoc;
