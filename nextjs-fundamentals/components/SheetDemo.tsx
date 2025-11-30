
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { ModeToggle } from "./ModeToggle"

export function SheetDemo() {
    return (
        <Sheet>
            <SheetTrigger> <Menu className="h-6 w-6" /> </SheetTrigger>
            <SheetContent className="flex flex-col justify-between">
                <div>
                    <SheetHeader className="mb-8">
                        <SheetTitle className="text-center text-2xl">NextMovies</SheetTitle>
                        {/* <SheetDescription className="text-center">
                            Menüden seçim yapabilirsiniz.
                        </SheetDescription> */}
                    </SheetHeader>

                    <div className="flex flex-col gap-4 px-6">
                        <Link className='text-foreground font-poppins text-base hover:text-primary transition-colors' href={'https://github.com/Furkannalbayrak'}>GitHub</Link>
                        <Link className='text-foreground font-poppins text-base hover:text-primary transition-colors' href={'https://www.linkedin.com/in/furkanalbayrakdev/'}>LinkedIn</Link>
                    </div>
                </div>

                <SheetFooter className="flex flex-row justify-end mt-auto pb-4">
                    <ModeToggle />
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}