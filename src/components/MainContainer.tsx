import {
	Description,
	Education,
	Flecha,
	GeoMap,
	GuitarLA,
	JournalApp,
	Pokemons,
	SearchMovie,
} from '.';

export const MainContainer = () => {
	return (
		<main className='main-container w-[600px] ml-[600px]'>
			<Description />

			<section className='section mt-20  pt-[60px]' id='education'>
				<Education />
				<a
					className='animate-bounce mt-10 flex gap-2 '
					href='https://drive.google.com/file/d/1ICiw1bcSlCFSvB041zd7v2CcpQck0wYy/view?usp=sharing'
					target='_blank'
				>
					<p className='font-bold text-[#f6eaea]'>View full Resume</p>
					<Flecha />
				</a>
			</section>

			{/* Proyects */}
			<section
				className='section mt-40 pt-[50px] mb-20 flex flex-col gap-3'
				id='proyects'
			>
				<GuitarLA />
				<JournalApp />
				<SearchMovie />
				<Pokemons />
				<GeoMap />

				<a
					className='animate-bounce mt-10 flex gap-2 '
					href='https://github.com/Cristhian-16'
					target='_blank'
				>
					<p className='font-bold text-[#f6eaea]'>View full Proyects</p>
					<Flecha />
				</a>
			</section>

			<div className='mb-20 w-[450px] text-[#afaeae]'>
				<p>
					Freely designed in{' '}
					<a href='https://www.figma.com' className='font-bold'>
						Figma
					</a>{' '}
					and coded in Visual Studio Code by yours truly. Built with React +
					Typescript and Tailwind CSS, implemented with{' '}
					<a href='https://www.netlify.com/' className='font-bold'>
						Netlify
					</a>
					.
				</p>
			</div>
		</main>
	);
};
