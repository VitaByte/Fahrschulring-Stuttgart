import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Frank Eibl",
      imageSrc: "/team/frank_eibl.jpg",
      role: "Fahrlehrer aller Klassen",
    },
    {
      name: "Milly Scholze Iseni",
      imageSrc: "/team/2.jpg",
      role: "Fahrlehrer der Klassen B, BE, A",
    },
    {
      name: "Heiko Schaible",
      imageSrc: "/team/heiko.jpg",
      role: "Fahrlehrer der Klassen A,B,BE",
    },
    {
      name: "Karol Szymanowski",
      imageSrc: "/team/3.jpg",
      role: "Fahrlehrer der Klassen B, BE, A",
    },
    {
      name: "Florije Iseni",
      imageSrc: "/team/florije.jpg",
      role: "Fahrlehrer der Klassen: B, BE",
    },
    {
      name: "Leyla Heptunali",
      imageSrc: "/team/leyla_heptunali.jpg",
      role: "Fahrlehrer der Klassen B, BE",
    },
    {
      name: "Taha El-Masri",
      imageSrc: "/team/Taha.jpg",
      role: "Fahrlehrer der Klassen B, BE",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8">
          <h2 className="mb-4 text-2xl tracking-tight font-semibold text-gray-700 dark:text-white">
            Wir sind für euch da
          </h2>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.imageSrc}
                  alt={`${member.name} Avatar`}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-gray-500 dark:text-green-400">
                  {member.role}
                </span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                  {/* Add description for each member here */}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  {/* Add social media links for each member here */}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
