export const Footer = () => {
    return (
        <footer className="flex items-center justify-center w-full bg-[color:var(--header-back-opacity)] text-[color:var(--header-back-sub)] text-center flex-col relative z-[50] backdrop-filter backdrop-blur-[10px] backdrop-saturate-150 py-[30px] px-[5px]">
            <p className="text-l font-light md:text-lg">© {new Date().getFullYear()} Sergio Acosta. All rights reserved.</p>
            <p className="text-sm md:text-l font-light w-[35ch] mt-[5px]">
                Coded in <a href="https://nextjs.org/" className="font-medium hover:text-[#FF72E1] focus-visible:text-[#FF72E1] transition-colors duration-200">Visual Studio Code</a> by yours truly. Built with{' '}
                <a href="https://nextjs.org/" className="font-medium hover:text-[#FF72E1] focus-visible:text-[#FF72E1] transition-colors duration-200">Next.js</a> and{' '}
                <a href="https://tailwindcss.com/" className="font-medium hover:text-[#FF72E1] focus-visible:text-[#FF72E1] transition-colors duration-200">Tailwind CSS</a>, self-deployed with{' '}
                <a href="https://hostinger.com/" className="font-medium hover:text-[#FF72E1] focus-visible:text-[#FF72E1] transition-colors duration-200">Hostinger</a>.
            </p>
        </footer>
    );
}
