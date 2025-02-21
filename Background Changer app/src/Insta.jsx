export default function Insta({name,post,foll,folls}) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        {/* Profile Header */}
        <div className="flex items-center space-x-6">
          {/* Profile Picture */}
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-gray-300"
          />
          {/* User Info */}
          <div>
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold">{name}</h1>
              <button className="px-4 py-1 bg-blue-500 text-white rounded-md">
                Follow
              </button>
            </div>
            {/* Stats */}
            <div className="flex space-x-6 mt-2 text-gray-600">
              <span><strong>{post}</strong> posts</span>
              <span><strong>{foll}</strong> followers</span>
              <span><strong>{folls}</strong> following</span>
            </div>
            {/* Bio */}
            <p className="mt-2 text-sm text-gray-700">
              💻 Web Developer | 🚀 Tech Enthusiast  
              Passionate about creating awesome UI/UX designs.  
            </p>
          </div>
        </div>
  
        {/* Grid Layout for Posts */}
        <div className="grid grid-cols-3 gap-1 mt-6">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-full h-32 bg-gray-300"></div>
          ))}
        </div>
      </div>
    );
  }
  