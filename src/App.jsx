import "./App.css";

const people = [
  {
    id: 1,
    name: "Mahesh Kumar",
    role: "Full Stack Developer",
    mobileNumber: "123-456-7890",
    email: "mahesh@example.com",
    about: "Expert in MERN Stack and responsive websites.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdZ-Wp0Df-u8MzoWlFE4HBTsnd1hLfvbCwg&s",
  },

  {
    id: 2,
    name: "Rahul Patel",
    role: "React Developer",
    mobileNumber: "234-567-8901",
    email: "rahul@example.com",
    about: "Builds modern UI with React and Tailwind CSS.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI2tfqwpfDKS4WkRMMQSI4nAZjk3BqxSsvQ&s",
  },

  {
    id: 3,
    name: "Aman Shah",
    role: "UI/UX Designer",
    mobileNumber: "345-678-9012",
    email: "aman@example.com",
    about: "Designs clean and user-friendly interfaces.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdRC-gm4ZqUFuBESH9YhaL3MI1D9qrMKxpw&s",
  },

  {
    id: 4,
    name: "Jay Mehta",
    role: "Backend Developer",
    mobileNumber: "456-789-0123",
    email: "jay@example.com",
    about: "Works with APIs, databases and server-side apps.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGkY37pv663ejqvyDJf5F5tvfW7KHjj1xEw&s",
  },

  {
    id: 5,
    name: "Meet Patel",
    role: "Node.js Developer",
    mobileNumber: "567-890-1234",
    email: "meet@example.com",
    about: "Creates scalable backend applications.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzYLFzBjWcoiT4EV-DgdK9GSJ75lec1ZqJQ&s",
  },

  {
    id: 6,
    name: "Vivek Kumar",
    role: "Frontend Developer",
    mobileNumber: "678-901-2345",
    email: "vivek@example.com",
    about: "Passionate about animations and UI effects.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBJeOeRoMMmig98EuUG9jUVjVdivz7tpJxQ&s",
  },
];

function App() {
  return (
    <div className="container">

      <h1 className="title">My Team Profiles</h1>

      <div className="card-container">

        {people.map((person) => (
          <div className="card" key={person.id}>

            <img
              src={person.image}
              alt={person.name}
              className="profile-img"
            />

            <div className="card-content">

              <h2>{person.name}</h2>

              <h3>{person.role}</h3>

              <p>{person.about}</p>

              <div className="contact-info">

                <p className="mobile">
                  📞 {person.mobileNumber}
                </p>

                <p className="email">
                  📧 {person.email}
                </p>

              </div>

              <button className="btn">
                View Profile
              </button>

            </div>

          </div>
        ))}

      </div>

      <footer className="footer">
        © My Single React Page | React Project
      </footer>

    </div>
  );
}

export default App;