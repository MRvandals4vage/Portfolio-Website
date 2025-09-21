import { FiAward, FiTrendingUp, FiBookOpen, FiActivity } from 'react-icons/fi';

const achievements = [
  {
    icon: <FiAward className="w-8 h-8 text-indigo-600" />,
    title: 'Bit N Build Hackathon — 1st Place (Tamil Nadu)',
    description: 'Won with team Technologia; qualified for the national finals in Mumbai.',
    year: '2024'
  },
  {
    icon: <FiActivity className="w-8 h-8 text-indigo-600" />,
    title: 'UROP — Energy Domain',
    description: 'Undergraduate research project (ongoing).',
    year: '2024–Present'
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-indigo-600" />,
    title: 'Academic Performance',
    description: 'GPA: 9.82 (Sem 1), 9.67 (Sem 2).',
    year: '2023–2024'
  },
  {
    icon: <FiBookOpen className="w-8 h-8 text-indigo-600" />,
    title: 'School Results',
    description: 'ICSE 10th: 96.8% · HSC 12th: 78%.'
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-surface rounded-xl my-12 border border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">Achievements & Highlights</h2>
          <div className="w-20 h-1 bg-accent1 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="bg-[#0F1621] p-6 rounded-lg transition-shadow duration-300 border border-border flex flex-col items-center text-center hover:shadow-[0_0_0_1px] hover:shadow-accent1/30"
            >
              <div className="bg-surface p-3 rounded-full mb-4 border border-border">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-semibold text-textPrimary mb-2">{achievement.title}</h3>
              <p className="text-textPrimary/80 mb-3">{achievement.description}</p>
              <span className="mt-auto text-sm text-accent2 font-medium">{achievement.year}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-textPrimary mb-4">Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js',
              
              'Tailwind CSS', 'Git', 'AWS', 'React Testing Library','Python','Postgre SQL'
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#0F1621] rounded-full text-sm font-medium text-accent2 border border-border hover:bg-surface hover:border-accent1/40 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
