import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function AddMemberForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from("members")
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          phone: phone,
        },
      ]);

    if (error) {
      console.error(error);
      alert("Failed to add member");
    } else {
      alert("Member added!");
      setFirstName("");
      setLastName("");
      setPhone("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <input
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">Add Member</button>
    </form>
  );
}