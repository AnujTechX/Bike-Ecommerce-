const ProfilePage = () => {
  const registeredDetails= JSON.parse(localStorage.getItem("registered"))
  console.log("profile",registeredDetails)
  // const signUpMatched = registeredDetails.some((details)=> ) 
  return (
<>
  {/* <style
    dangerouslySetInnerHTML={{
      __html:
        '\n  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }\n  .toast {\n    animation: slideIn 0.25s ease-out, fadeOut 0.3s ease-in 1.7s forwards;\n  }\n  @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }\n  @keyframes fadeOut { to { opacity: 0; } }\n'
    }}
  /> */}
  <div
    id="toast-container"
    className="fixed top-4 right-4 z-50 flex flex-col gap-2"
  />
  <div className="bg-blue-600 text-white p-4">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold">{registeredDetails[0].fname}</h1>
    </div>
  </div>
  <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
    <div className="lg:col-span-1">
      <div className="bg-white rounded shadow-sm">
        <div className="p-4 border-b bg-blue-50">
          <div className="flex items-center gap-3">
            <img
              id="sidebar-avatar"
              src="https://lh3.googleusercontent.com/a/ACg8ocITatn1cnYva1c39UKTjYWFLLXk0VXTYoYeP3lYn-9wnCV-m8uQ=s96-c"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-200"
            />
            <div>
              <p className="font-medium text-gray-800">Hello,</p>
              <p id="sidebar-name" className="text-sm text-gray-600">
                {registeredDetails[0].fname}
              </p>
            </div>
          </div>
        </div>
        <div className="p-0">
          <div className="bg-blue-600 text-white px-4 py-3 flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx={12} cy={7} r={4} />
            </svg>
            <span className="font-medium">Menu</span>
          </div>
          <div
            data-tab="orders"
            className="tab-btn px-4 py-3 cursor-pointer flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={9} cy={21} r={1} />
              <circle cx={20} cy={21} r={1} />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            My Orders
          </div>
          <div
            data-tab="wishlist"
            className="tab-btn px-4 py-3 cursor-pointer flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            Wishlist
          </div>
          <div
            data-tab="reviews"
            className="tab-btn px-4 py-3 cursor-pointer flex items-center gap-3 text-sm text-gray-700 hover:bg-gray-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={8} r={7} />
              <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
            </svg>
            Reviews &amp; Ratings
          </div>
          <div
            data-tab="account"
            className="tab-btn px-4 py-3 cursor-pointer flex items-center gap-3 text-sm bg-blue-50 text-blue-600 font-medium"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx={12} cy={12} r={3} />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            Account Settings
          </div>
        </div>
      </div>
    </div>
    <div className="lg:col-span-3">
      <div className="bg-white rounded shadow-sm">
        <div id="tab-account" className="tab-panel">
          <div className="p-6 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-800">
                Personal Information
              </h2>
              <div id="edit-btn-wrap">
                <button
                  id="edit-btn"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                  </svg>
                  Edit
                </button>
              </div>
              <div id="save-cancel-wrap" className="hidden flex gap-2">
                <button
                  id="save-btn"
                  className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition-colors flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Save
                </button>
                <button
                  id="cancel-btn"
                  className="bg-gray-500 text-white px-4 py-2 text-sm rounded hover:bg-gray-600 transition-colors flex items-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                  Cancel
                </button>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex items-center gap-6 pb-6 border-b">
                <img
                  id="main-avatar"
                  src="https://lh3.googleusercontent.com/a/ACg8ocITatn1cnYva1c39UKTjYWFLLXk0VXTYoYeP3lYn-9wnCV-m8uQ=s96-c"
                  alt="Jugendra"
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />
                <div className="flex-1">
                  <input
                    id="avatar-input"
                    type="url"
                    className="hidden w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Profile image URL"
                    defaultValue="https://i.pravatar.cc/150?img=12"
                  />
                  <div id="avatar-display">
                    <h3
                      id="display-name"
                      className="text-lg font-medium text-gray-800"
                    >
                      {registeredDetails[0].fname}
                    </h3>
                    <p id="display-username" className="text-gray-600">
                      {registeredDetails[0].email}
                    </p>
                    <div className="mt-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        ● Online
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  id="fullname-input"
                  type="text"
                  className="hidden w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter your full name"
                  defaultValue="Jugendra"
                />
                <div
                  id="fullname-display"
                  className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-800"
                >
                  {registeredDetails[0].fname}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username
                </label>
                <input
                  id="username-input"
                  type="text"
                  className="hidden w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter username"
                  defaultValue="aarav.gangwar"
                />
                <div
                  id="username-display"
                  className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-800"
                >
                  {`@${registeredDetails[0].fname}`}
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="p-3 bg-gray-50 border border-gray-200 rounded text-gray-800 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  {registeredDetails[0].email}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="tab-orders" className="tab-panel hidden p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            My Orders
          </h2>
          <div id="orders-list" className="space-y-4" />
        </div>
        <div id="tab-wishlist" className="tab-panel hidden">
          <div className="mx-auto px-4 py-4">
            <div
              id="wishlist-empty"
              className="hidden flex-col items-center justify-center text-center py-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-gray-300 mb-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx={9} cy={21} r={1} />
                <circle cx={20} cy={21} r={1} />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              <p className="text-gray-500">Your wishlist is empty.</p>
            </div>
            <div
              id="wishlist-grid"
              className="grid gap-6 sm:grid-cols-2 md:grid-cols-3"
            />
          </div>
        </div>
        <div id="tab-reviews" className="tab-panel hidden p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Reviews &amp; Ratings
          </h2>
          <div id="reviews-list" className="space-y-5" />
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default ProfilePage
