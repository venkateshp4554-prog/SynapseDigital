import { useShop } from '../context/ShopContext';

const Profile: React.FC = () => {
  const { user, logout, wishlistCount, cartCount } = useShop();

  return (
    <main className="px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <section className="glass-card rounded-[2rem] border p-8 shadow-xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Account</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-950 dark:text-white">Your profile</h1>
            </div>
            <button onClick={logout} className="btn-secondary rounded-full px-6 py-3">
              Sign out
            </button>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Name</p>
              <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{user?.name}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
              <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{user?.email}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
              <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{user?.city}, {user?.country}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
              <p className="text-sm text-slate-500 dark:text-slate-400">Postal code</p>
              <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">{user?.zip}</p>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Quick stats</h2>
            <div className="mt-5 grid gap-4">
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">Saved items</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{wishlistCount}</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-5 dark:bg-zinc-900">
                <p className="text-sm text-slate-500 dark:text-slate-400">Items in cart</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{cartCount}</p>
              </div>
            </div>
          </div>
          <div className="glass-card rounded-[2rem] border p-6 shadow-xl">
            <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Account preferences</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">This mock profile page includes your saved identity, order history access, and personalized storefront settings.</p>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default Profile;
