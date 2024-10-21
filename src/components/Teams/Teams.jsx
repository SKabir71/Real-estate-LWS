import team1 from "../../assets/images/team/team-01.png";
import team2 from "../../assets/images/team/team-02.png";
import team3 from "../../assets/images/team/team-03.png";
import team4 from "../../assets/images/team/team-04.png";
import Profile from "./Profile/Profile";

const teamMembers = [
  {
    img: team1,
    name: "Melissa Tatcher",
    role: "Marketing Expert",
  },
  {
    img: team2,
    name: "Stuard Ferrel",
    role: "Digital Marketer",
  },
  {
    img: team3,
    name: "Eva Hudson",
    role: "Creative Designer",
  },
  {
    img: team4,
    name: "Jackie Sanders",
    role: "Founder of Facebook",
  },
];

const Teams = () => {
  return (
    <section
      id="team"
      className="overflow-hidden bg-gray-1 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[485px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Clients
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <Profile
              key={index}
              img={member.img}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
