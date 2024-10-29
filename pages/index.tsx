import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Users, Eye, Clock } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

type Project = {
    id: number;
    title: string;
    description: string;
};

export default function Home() {
    const [activeProject, setActiveProject] = useState<Project | null>(null);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRotation((prev) => (prev + 1) % 360);
        }, 50);
        return () => clearInterval(intervalId);
    }, []);

    const projects = [
        {
            id: 1,
            title: 'KanuniAfya Pharmacy',
            description: 'Health Guaranteed',
        },
        {
            id: 2,
            title: 'Coming Soon',
            description: '',
        },
        {
            id: 3,
            title: 'Coming Soon',
            description: '',
        },
    ];

    const stats = [
        { title: 'Total Visitors', value: '10,234', icon: Users },
        { title: 'Page Views', value: '45,678', icon: Eye },
        { title: 'Avg. Time on Site', value: '2m 15s', icon: Clock },
    ];

    return (
        <div className='min-h-screen bg-black text-white relative overflow-hidden'>
            {/* Animated grid background with streak */}
            <div
                className='absolute inset-0 z-0'
                style={{
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),`,
                    backgroundSize: '50px 50px',
                    animation: 'moveGrid 15s linear infinite',
                }}
            >
                {/* Vertical streaks */}
                <div className='streak vertical-streak'></div>
                <div className='streak vertical-streak'></div>
                <div className='streak vertical-streak'></div>
                {/* Horizontal streaks */}
                <div className='streak horizontal-streak'></div>
                <div className='streak horizontal-streak'></div>
                <div className='streak horizontal-streak'></div>
            </div>
            <style jsx global>{`
                @keyframes moveGrid {
                    0% {
                        transform: translate(0, 0);
                    }
                    100% {
                        transform: translate(50px, 50px);
                    }
                }

                .streak {
                    position: absolute;
                    background: rgba(255, 255, 255, 0.6);
                    filter: blur(3px);
                }

                .vertical-streak {
                    width: 1px;
                    height: 100px;
                    animation: verticalStreak 5s infinite;
                }

                .horizontal-streak {
                    width: 100px;
                    height: 1px;
                    animation: horizontalStreak 5s infinite;
                }

                @keyframes verticalStreak {
                    0% {
                        transform: translateY(-100%) translateX(var(--x));
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(100vh) translateX(var(--x));
                        opacity: 0;
                    }
                }

                @keyframes horizontalStreak {
                    0% {
                        transform: translateX(-100%) translateY(var(--y));
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(100vw) translateY(var(--y));
                        opacity: 0;
                    }
                }
            `}</style>

            {/* Content */}
            <div className='relative z-10'>
                {/* Hero Section */}
                <section className='min-h-screen flex flex-col justify-center items-center relative py-20'>
                    <div className='relative mb-8'>
                        <div
                            className='w-64 h-64 rounded-full absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'
                            style={{
                                transform: `rotate(${rotation}deg)`,
                                filter: 'blur(15px)',
                                opacity: 0.8,
                            }}
                        />
                        <div className='w-64 h-64 rounded-full overflow-hidden relative'>
                            <Image
                                src='/Profile.jpeg'
                                alt='Your Name'
                                width={500}
                                height={500}
                                priority={true}
                                className='w-full h-full object-cover filter grayscale hover:filter-none transition-all duration-300'
                            />
                        </div>
                    </div>
                    <motion.h1
                        className='text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center'
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        Alex Jarabi
                    </motion.h1>
                    <motion.p
                        className='text-xl md:text-2xl mt-4 text-gray-300 text-center'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Web Developer | Designer | Creator
                    </motion.p>
                    <motion.div
                        className='absolute bottom-10'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                    >
                        <ChevronDown className='animate-bounce' size={32} />
                    </motion.div>
                </section>

                {/* About Section */}
                <section className='py-20 bg-gray-900 bg-opacity-80'>
                    <div className='container mx-auto px-4'>
                        <h2 className='text-4xl font-bold mb-8'>About Me</h2>
                        <p className='text-xl text-gray-300 max-w-3xl'>
                            I&apos;m a passionate web developer with a keen eye
                            for design. I love creating beautiful, functional
                            websites that leave a lasting impression. With
                            expertise in modern web technologies, I bring ideas
                            to life through code.
                        </p>
                    </div>
                </section>

                {/* Projects Section */}
                <section className='py-20'>
                    <div className='container mx-auto px-4'>
                        <h2 className='text-4xl font-bold mb-12'>
                            My Projects
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                            {projects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    className='bg-gray-800 bg-opacity-80 p-6 rounded-lg cursor-pointer'
                                    whileHover={{ scale: 1.05 }}
                                    onClick={() => setActiveProject(project)}
                                >
                                    <h3 className='text-2xl font-semibold mb-2'>
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-400'>
                                        {project.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Statistics Section */}
                <section className='py-20 bg-gray-900 bg-opacity-80'>
                    <div className='container mx-auto px-4'>
                        <h2 className='text-4xl font-bold mb-12 text-center'>
                            Site Statistics
                        </h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                            {stats.map((stat, index) => (
                                <Card
                                    key={index}
                                    className='bg-gray-800 bg-opacity-80 border-gray-700'
                                >
                                    <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                        <CardTitle className='text-sm font-medium'>
                                            {stat.title}
                                        </CardTitle>
                                        <stat.icon className='h-4 w-4 text-gray-400' />
                                    </CardHeader>
                                    <CardContent>
                                        <div className='text-2xl font-bold'>
                                            {stat.value}
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className='py-20'>
                    <div className='container mx-auto px-4'>
                        <h2 className='text-4xl font-bold mb-8'>
                            Get In Touch
                        </h2>
                        <div className='flex justify-center space-x-6'>
                            <a
                                href='#'
                                className='text-gray-300 hover:text-white transition-colors'
                            >
                                <FaGithub
                                    style={{
                                        fontSize: 32,
                                    }}
                                />
                            </a>
                            <a
                                href='#'
                                className='text-gray-300 hover:text-white transition-colors'
                            >
                                <FaLinkedin
                                    style={{
                                        fontSize: 32,
                                    }}
                                />
                            </a>
                            <a
                                href='#'
                                className='text-gray-300 hover:text-white transition-colors'
                            >
                                <Mail size={32} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Project Modal */}
                {activeProject && (
                    <div className='fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50'>
                        <div className='bg-gray-800 p-8 rounded-lg max-w-2xl w-full'>
                            <h3 className='text-3xl font-bold mb-4'>
                                {activeProject.title}
                            </h3>
                            <p className='text-gray-300 mb-6'>
                                {activeProject.description}
                            </p>
                            <button
                                className='bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
                                onClick={() => setActiveProject(null)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
