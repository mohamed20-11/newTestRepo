using System.Collections;

namespace ConsoleApp1
{
    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            var ints =new FiveIntegers(1,2,3,5,6);
            foreach (var i in ints)
            {
                Console.WriteLine($"Item: {i}");
            }
        }
    }


    class FiveIntegers :IEnumerable
    {
        int[] _values;
        public FiveIntegers(int n1, int n2, int n3, int n4, int n5)
        {
            _values = new[] { n1, n2, n3, n4, n5 };
        } 

        public IEnumerator GetEnumerator() 
        {
            foreach (int i in _values) 
            {
                yield return i;
            }
        }
    }
}