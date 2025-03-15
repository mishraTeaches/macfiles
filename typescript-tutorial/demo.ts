interface Student {
  id: number;
  firstName: string;
  lastName: string;
}

type newUser = Omit<Student, "id">;

const user: newUser = {
  firstName: "iSHU",
  lastName: "mishra",
};
