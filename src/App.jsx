import "./App.css";

const people = [
  {
    id: 1,
    name: "Mahesh Kumar",
    role: "Full Stack Developer",
    about: "Expert in MERN Stack and responsive websites.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAdZ-Wp0Df-u8MzoWlFE4HBTsnd1hLfvbCwg&s",
  },

  {
    id: 2,
    name: "Rahul Patel",
    role: "React Developer",
    about: "Builds modern UI with React and Tailwind CSS.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzI2tfqwpfDKS4WkRMMQSI4nAZjk3BqxSsvQ&s",
  },

  {
    id: 3,
    name: "Aman Shah",
    role: "UI/UX Designer",
    about: "Designs clean and user-friendly interfaces.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAdRC-gm4ZqUFuBESH9YhaL3MI1D9qrMKxpw&s",
  },

  {
    id: 4,
    name: "Jay Mehta",
    role: "Backend Developer",
    about: "Works with APIs, databases and server-side apps.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNGkY37pv663ejqvyDJf5F5tvfW7KHjj1xEw&s",
  },

  {
    id: 5,
    name: "Meet Patel",
    role: "Node.js Developer",
    about: "Creates scalable backend applications.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQzYLFzBjWcoiT4EV-DgdK9GSJ75lec1ZqJQ&s",
  },

  {
    id: 6,
    name: "Vivek Kumar",
    role: "Frontend Developer",
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

              <button className="btn">
                View Profile
              </button>

            </div>

          </div>
        ))}

      </div>

      <footer className="footer">
        © My single react page | React page
      </footer>

    </div>
  );
}

export default App;