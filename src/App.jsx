import MembersList from "./components/MembersList";
import AddMemberForm from "./components/AddMemberForm";

function App() {
  return (
    <div>
      <h1>Church Member Management</h1>
      <AddMemberForm />
      <MembersList />
    </div>
  );
}

export default App;