import SetupCard from "./setupCard"
import LlmSection from "./llmSection"
import Header from "./header"
import LoadingPage from "./loadingPage"
import SuccessMessage from "./successMessage"
import ExistingAccountPage from "./existingAccountPage"

export default function LandingPage() {
    return (
        <main className="flex flex-col h-screen w-full items-center gap-4">
            <Header></Header>
            <div className="text-[1.871rem] mt-6">Onboarding made as seamless as possible.</div>
            <LoadingPage></LoadingPage>
            <ExistingAccountPage></ExistingAccountPage>
            <SetupCard></SetupCard>
            <LlmSection></LlmSection>
            <SuccessMessage></SuccessMessage>
        </main>
    )
}