import React from 'react'

const AdminTeamShow = ({teams,setTeams,onClickEdit}) => {
  if (!teams.length)
    return (
      <div className="text-gray-500 text-center py-4">No Team found</div>
    );
  

  const handleEdit = (teams) => {
    onClickEdit(teams);
  };
  return (
    <div className="w-1/2 h-[95vh] rounded-2xl shadow-2xl p-4 flex flex-col">
      <h1 className="text-3xl font-bold mb-3">teams</h1>
      <div className="h-full w-full overflow-y-auto">
        <div className="flex flex-col gap-3">
          {teams.length === 0 && (
            <p className="text-gray-500 text-center">No teams found</p>
          )}
          {teams.map((team) => (
            <div
              key={team.id}
              className="w-full bg-white border rounded-lg shadow-md p-3 flex justify-between items-center hover:bg-gray-100 transition"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={team.imageUrl}
                  alt={team.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h2 className="font-semibold text-lg">{team.name}</h2>
                  <p className="text-sm text-gray-500">{team.title}</p>
                </div>
              </div>
              <button
                onClick={() => handleEdit(team)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              >
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTeamShow