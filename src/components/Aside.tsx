import { Github, Gmail, Instagram, Linkedin } from '.';

export const Aside = () => {
	return (
		<div className='fixed'>
			<header className='flex flex-col gap-3'>
				<h1 className='text-extrabold text-5xl'>Cristhian Espiritu</h1>
				<p className='text-semibold text-xl'>Front-End Developer</p>
				<p className='w-[400px] text-sm text-[#b6b3b3]'>
					I develop digital solutions and web experiences that are accessible to
					all users.
				</p>
			</header>

			<nav className='mt-12'>
				<ul className='flex flex-col gap-3  uppercase font-bold text-sm text-[#92919F]'>
					<a className={`group flex items-center py-3`} href='#about'>
						<span className=' mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
						<span className='text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
							About
						</span>
					</a>
					<a className='group flex items-center py-3' href='#education'>
						<span className='mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
						<span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
							Education
						</span>
					</a>
					<a className='group flex items-center py-3' href='#proyects'>
						<span className=' mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none'></span>
						<span className=' text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200'>
							Proyects
						</span>
					</a>
				</ul>
			</nav>

			<footer className='flex items-center gap-5 mt-[390px]'>
				<Github />
				<Instagram />
				<Linkedin />
				<Gmail />
			</footer>
		</div>
	);
};
