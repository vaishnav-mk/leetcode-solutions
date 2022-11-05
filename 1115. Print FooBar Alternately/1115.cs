using System;
using System.Threading;
public class FooBar {
    private int n;

    readonly ManualResetEventSlim mres1 = new ManualResetEventSlim(true);
    readonly ManualResetEventSlim mres2 = new ManualResetEventSlim(false);
    public FooBar(int n) {
        this.n = n;
    }

    public void Foo(Action printFoo) {

        for (int i = 0; i < n; i++) {
            mres1.Wait();
        	// printFoo() outputs "foo". Do not change or remove this line.
        	printFoo();
            mres1.Reset();
            mres2.Set();
        }
        mres1.Dispose();
    }

    public void Bar(Action printBar) {

        for (int i = 0; i < n; i++) {
            mres2.Wait();
            // printBar() outputs "bar". Do not change or remove this line.
        	printBar();
            mres2.Reset();
            mres1.Set();
        }
        mres2.Dispose();
    }
}

/*
Runtime
258 ms
Beats
52.94%
Memory
29.7 MB
Beats
83.33%
*/
