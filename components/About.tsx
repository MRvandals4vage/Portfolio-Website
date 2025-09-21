export default function About() {
  const skills = [
  
    'Mathematical Thinking', 'Linear Algebra', 'Probability', 'Statistics', 'Optimization', 'Algorithms', 'Data Structures',
 
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS',
  
    'Git', 'Problem Solving',
    
    'Node.js (Learning)', 'Express (Learning)', 'REST APIs (Learning)', 'SQL/PostgreSQL (Learning)'
  ];

  return (
    <section id="about" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-textPrimary mb-4">About Me</h2>
        <div className="w-20 h-1 bg-accent1 mx-auto"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/3">
          <div className="bg-surface rounded-full overflow-hidden w-64 h-64 mx-auto border border-border">
            <img
              src="/profile-photo.jpeg"
              alt="Ishaan Upponi profile photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-textPrimary mb-4">Hi, I’m Ishaan Upponi</h3>
          <p className="text-textPrimary/80 mb-6 leading-relaxed">
            I’m a second-year <span className="font-medium">CSE (AI & ML)</span> student at <span className="font-medium">SRM Institute of Science and Technology, KTR</span>.
            I enjoy building things for the web and I’m steadily progressing toward becoming a
            well-rounded full‑stack developer. My strength in AI/ML comes from a focus on the
            underlying <span className="font-medium">mathematical foundations</span> rather than only relying on frameworks.
            I’m part of the technical team at <span className="font-medium">HRCC (HackerRank Campus Crew)</span> and I’m currently working on a
            <span className="font-medium"> UROP project</span> in the energy domain.
          </p>
          <p className="text-textPrimary/80 mb-6 leading-relaxed">
            I’m learning backend development step‑by‑step (Node.js, Express, SQL) and plan to have a
            strong grasp by February. In parallel, I’m sharpening my frontend skills with a focus on
            <span className="font-medium"> React</span> and <span className="font-medium">TypeScript</span>.
          </p>
          
          <h4 className="text-xl font-semibold text-textPrimary mb-4">My Skills</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span 
                key={skill}
                className="px-3 py-1 bg-surface text-accent2 text-sm font-medium rounded-full border border-border"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-textPrimary mb-2">Education</h5>
              <div className="space-y-4">
                <div className="bg-surface border border-border rounded-lg p-4">
                  <h6 className="font-medium text-accent1">B.Tech CSE (AI & ML) — SRM IST, KTR</h6>
                  <p className="text-sm text-textPrimary/80">Second Year</p>
                  <ul className="list-disc list-inside text-sm text-textPrimary/80 mt-1 space-y-1">
                    <li>Semester 1 GPA: 9.82</li>
                    <li>Semester 2 GPA: 9.67</li>
                  </ul>
                </div>
                <div className="bg-surface border border-border rounded-lg p-4">
                  <h6 className="font-medium text-accent1">Academics</h6>
                  <ul className="list-disc list-inside text-sm text-textPrimary/80 mt-1 space-y-1">
                    <li>ICSE (10th): 96.8%</li>
                    <li>HSC (12th): 78%</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-textPrimary mb-2">Experience</h5>
              <div className="space-y-4">
                <div className="bg-surface border border-border rounded-lg p-4">
                  <h6 className="font-medium text-accent1">Core Member — HRCC (HackerRank Campus Crew)</h6>
                  <p className="text-sm text-textPrimary/80">Technical Team</p>
                </div>
                <div className="bg-surface border border-border rounded-lg p-4">
                  <h6 className="font-medium text-accent1">UROP — Energy Domain</h6>
                  <p className="text-sm text-textPrimary/80">Undergraduate Research (Ongoing)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
