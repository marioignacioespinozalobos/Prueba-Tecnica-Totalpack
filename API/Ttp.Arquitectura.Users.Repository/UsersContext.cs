using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Ttp.Arquitectura.Users.Domain;

namespace Ttp.Arquitectura.Users.Repository
{
    public class UsersContext : DbContext
    {
        public UsersContext(DbContextOptions<UsersContext> options) : base(options)
        {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Ciudad> Ciudad { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<User>().ToTable("users");
            modelBuilder.Entity<Ciudad>().ToTable("ciudad");
        }      

    }

}

