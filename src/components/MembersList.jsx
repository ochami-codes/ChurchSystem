import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function MembersList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("date_joined", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setMembers(data);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div>
      <h2>Members</h2>
      {members.length === 0 ? (
        <p>No members yet.</p>
      ) : (
        <ul>
          {members.map(member => (
            <li key={member.member_id}>
              {member.first_name} {member.last_name}
              {" — "}
              {member.phone}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}