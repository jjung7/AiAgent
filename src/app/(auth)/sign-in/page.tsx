import { SignInView } from "@/modules/auth/ui/views/sign-in-view";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const Page = async  () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    
    
    if (!!session) {
    // Redirect to sign-in page if not authenticated
    redirect("/");
    }
    return< SignInView/>
}

export default Page;