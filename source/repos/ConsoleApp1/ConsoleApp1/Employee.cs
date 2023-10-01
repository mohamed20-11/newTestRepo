using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal salary { get; set; }


        public override bool Equals(object? obj)
        {
            
            if (obj == null || !(obj is Employee))
                {
                return false;
                 }
            var emp = obj as Employee;
            return this.Id == emp.Id
                && this.Name == emp.Name
                && this.salary == emp.salary;

        }
        public static bool operator == (Employee left, Employee right) { return left.Equals(right); }
        public static bool operator != (Employee left, Employee right) { return !left.Equals(right); }

    }
}
