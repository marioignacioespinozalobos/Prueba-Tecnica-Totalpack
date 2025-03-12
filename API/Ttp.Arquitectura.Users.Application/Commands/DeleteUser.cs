using Mapster;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;

namespace Ttp.Arquitectura.Users.Application.Commands
{
    public class DeleteUserCommand
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public DateTime Birth { get; set; }
        public string Email { get; set; }
    }
             
    public class DeleteUserHandler(IGenericRepository<User> user)
    {
        private IGenericRepository<User> _user { get; } = user;

        public void Handle(DeleteUserCommand command)
        {           
            _user.Delete(command.Adapt<User>());
            _user.Save();
        }
    }
}