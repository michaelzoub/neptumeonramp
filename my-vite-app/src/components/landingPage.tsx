import SetupCard from "./setupCard"
import LlmSection from "./llmSection"
import Header from "./header"

export default function LandingPage() {
    return (
        <main className="flex flex-col h-screen w-full items-center gap-4">
            <Header></Header>
            <div className="text-3xl">Onboarding made as seamless as possible.</div>
            <SetupCard></SetupCard>
            <LlmSection></LlmSection>
        </main>
    )
}