using System;
using System.Threading;

public class Foo {

    readonly ManualResetEventSlim mres1 = new ManualResetEventSlim(false);
    readonly ManualResetEventSlim mres2 = new ManualResetEventSlim(false);

    public Foo() {
        
    }

    public void First(Action printFirst) {
        
        // printFirst() outputs "first". Do not change or remove this line.
        printFirst();
        mres1.Set();
    }

    public void Second(Action printSecond) {
        
        // printSecond() outputs "second". Do not change or remove this line.
        mres1.Wait();
        printSecond();
        mres2.Set();
    }

    public void Third(Action printThird) {
        
        // printThird() outputs "third". Do not change or remove this line.
        mres2.Wait();
        printThird();
    }
}

/*
Runtime
376 ms
Beats
44.76%
Memory
40.1 MB
Beats
43.33%
*/
