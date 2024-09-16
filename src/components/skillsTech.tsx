"use client";
import "@/styles/skillsTech.sass";
import ProgressBar from "@/components/progressBar";

export default function SkillsTech() {
    const skillsFrontend = [
        { label: 'React', percentage: 90, color: "#61dafb" },
        { label: 'Next.js', percentage: 75, color: "#000000" },
        { label: 'Sass', percentage: 75, color: "#cc6699" },
        { label: 'JavaScript', percentage: 90, color: "#f0db4f" }
    ];

    const skillsBackend = [
        { label: 'Node.js', percentage: 70, color: "#339933" },
        { label: 'TypeScript', percentage: 85, color: "#007acc" },
        { label: 'Python', percentage: 70, color: "#306998" },
        { label: 'Java', percentage: 10, color: "#007396" }
    ];

    const skillsDatabase = [
        { label: 'MongoDB', percentage: 40, color: "#47a248" },
        { label: 'PostgreSQL', percentage: 60, color: "#336791" },
        { label: 'MySQL', percentage: 75, color: "#4479a1" },
        { label: 'SQL Developer', percentage: 45, color: "#003b57" }
    ];

    const skillsOthers = [
        { label: 'Git', percentage: 80, color: "#f34f29" },
        { label: 'Vite', percentage: 75, color: "#646c6f" },
        { label: 'Linux', percentage: 60, color: "#ff5e00" },
    ];

    const skillsLanguages = [
        { label: 'Inglês', percentage: 50, color: "#ffcc00" },
        { label: 'Espanhol', percentage: 20, color: "#ff0000" },
    ]
    
    return (
        <>
            <div className="skills-title">
                <h2 id="conhecimentos">Conhecimentos</h2>
            </div>

            <div className="skills-content">
                <div className="skills">
                    <h3>Frontend</h3>
                    {skillsFrontend.map((skill) => (
                        <div className="skill" key={skill.label}>
                            <ProgressBar label={skill.label} percentage={skill.percentage} color={skill.color} />
                        </div>
                    ))}
                </div>

                <div className="skills">
                    <h3>Backend</h3>
                    {skillsBackend.map((skill) => (
                        <div className="skill" key={skill.label}>
                            <ProgressBar label={skill.label} percentage={skill.percentage} color={skill.color} />
                        </div>
                    ))}
                </div>

                <div className="skills">
                    <h3>Banco de Dados</h3>
                    {skillsDatabase.map((skill) => (
                        <div className="skill" key={skill.label}>
                            <div className="skill" key={skill.label}>
                                <ProgressBar label={skill.label} percentage={skill.percentage} color={skill.color} />
                            </div>
                        </div>
                    ))}
                </div> 

                <div className="skills">
                    <h3>Outros</h3>
                    {skillsOthers.map((skill) => (
                        <div className="skill" key={skill.label}>
                            <div className="skill" key={skill.label}>
                                <ProgressBar label={skill.label} percentage={skill.percentage} color={skill.color} />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills">
                    <h3>Línguas</h3>
                    {skillsLanguages.map((skill) => (
                        <div className="skill" key={skill.label}>
                            <div className="skill" key={skill.label}>
                                <ProgressBar label={skill.label} percentage={skill.percentage} color={skill.color} />
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </>
    );
}
