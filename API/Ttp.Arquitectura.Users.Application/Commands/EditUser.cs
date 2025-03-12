using Mapster;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;

namespace Ttp.Arquitectura.Users.Application.Commands
{
    public class EditUserCommand
    {
        public Guid Id { get; set; }
        public string FullName { get; set; }
        public DateTime Birth { get; set; }
        public string Email { get; set; }
    }

    public class EditUserHandler(IGenericRepository<User> user)
    {
        private IGenericRepository<User> _user { get; } = user;

        public void Handle(EditUserCommand command)
        {           
            _user.Update(command.Adapt<User>());
            _user.Save();
        }
    }
}