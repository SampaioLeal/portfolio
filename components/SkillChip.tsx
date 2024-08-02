export function SkillChip(props: { name: string }) {
  return (
    <div className="bg-[#297ba0] text-white px-2 rounded-lg shadow">
      {props.name}
    </div>
  );
}
