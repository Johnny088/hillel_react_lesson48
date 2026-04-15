export const AddNewHabitForm = () => {
  const submitHandler = (formData: FormData) => {
    const title = formData.get('habit') as string;
    if (title.trim() === '') {
      return;
    }
    console.log(`title: ${title}`);
  };
  return (
    <form action={submitHandler}>
      <input name="habit" type="text" />
      <button>add</button>
    </form>
  );
};
