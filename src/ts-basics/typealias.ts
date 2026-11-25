type Employee = {
    id: number;
    name: string;
    retire: (date: Date) => void;
};
let employee: Employee = {
    id: 112,
    name: "Venessa",
    retire: (date: Date) => {
        console.log(`Employee retired on ${date}`);
    }
};

employee.retire(new Date());
