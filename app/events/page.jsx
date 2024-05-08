import SignupForm from "../_components/Events/SignupForm";

export default function Page() {
  const infoText = (
    <>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, dolores.</>
  );
  const headline = "this is headline";
  return (
    <main className="events-page">
      <SignupForm infoText={infoText} headline={headline} />
    </main>
  );
}
