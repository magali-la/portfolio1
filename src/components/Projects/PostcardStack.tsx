import type { Project } from "../../data/portfolio"

// interface for props
interface PostcardStackProps {
    project: Project
}

export default function PostcardStack({ project }: PostcardStackProps) {
    // destructure the postcard object fields
    const { teaser, type, focus, status, frontImg } = project.postcard

    return (
        <div className="flex flex-col -space-y-2 w-fit py-6 px-4">
            {/* postcard front with image */}
            <div className="project-stack-front w-96 h-54 sm:w-md sm:h-63 md:w-xl md:h-81">
                <img className="p-2 object-cover h-full w-full bg-cream" src={frontImg} alt={`screen shot of ${project.title}`}/>
            </div>

            {/* postcard back with text */}
            <div className="project-stack-back -ml-6 flex flex-row justify-between border-coffee border bg-cream p-4 w-96 h-54 sm:w-md sm:h-63 md:w-xl md:h-81">
                {/* left side - teaser */}
                <div className="flex w-1/2 justify-center items-center p-2 border-r-2 border-wave">
                    <p className="text-sm sm:text-base text-pomegranate font-medium font-right text-center">{teaser}</p>
                </div>

                {/* right side - metadata */}
                <div className="flex flex-col w-1/2 pl-2 pb-3 justify-end md:justify-between gap-3 ">
                    {/* stamp box - hide it on small screens due to overflow */}
                    <div className="hidden sm:flex w-full justify-end">
                        <div className="w-12 h-15 border-2 border-wave flex justify-center items-center text-center">
                            <p className="text-[10px]">Place Stamp Here</p>
                        </div>
                    </div>

                    {/* written text */}
                    <div className="flex flex-col gap-1 md:gap-1.5">
                        {/* type */}
                        <div className="flex flex-col border-b-2 border-wave">
                            <p className="text-sm uppercase font-right">Type</p>
                            <p className="text-sm md:text-base border-dotted border-wave">{type}</p>
                        </div>
                        {/* focus */}
                        <div className="flex flex-col border-b-2 border-wave">
                            <p className="text-sm uppercase font-right">Focus</p>
                            <p className="">{focus}</p>
                        </div>
                        {/* status */}
                        <div className="flex flex-col border-b-2 border-wave">
                            <p className="text-sm uppercase font-right">Status</p>
                            <p className="">{status}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}