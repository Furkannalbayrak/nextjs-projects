
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Terminal } from "lucide-react"

export default function notFoundMovie() {
    return (
        <div>
            <Alert variant="destructive" className="text-3xl text-center space-y-4" >
                <Terminal />
                <AlertTitle> Not Found 404 !</AlertTitle>
                <AlertDescription className="text-xl justify-center">
                    Aradığınız film bulunamadı :(
                </AlertDescription>
            </Alert>
        </div>
    )
}