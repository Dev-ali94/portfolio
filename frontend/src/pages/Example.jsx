  <div className="mt-auto flex gap-2">
              <a
                href={project.link}
                className="flex-1 px-3 py-2 rounded-full text-white text-[11px] font-[font1] uppercase 
                bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950
                 hover:bg-none hover:border border-purple-900 transition text-center">
                Live Demo
              </a>
              <Link
                to={`/project/${project.slug}`}
                className="flex-1 px-3 py-2 rounded-full text-white text-[11px] font-[font1] uppercase border
                 border-purple-700 hover:bg-gradient-to-tr from-purple-800 via-purple-900 to-purple-950
                  hover:border-transparent transition text-center">
                View Detail
              </Link>
            </div>