using Mapster;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;

namespace Ttp.Arquitectura.Users.Application.Commands
{
    public class AddUserCiudadesCommand
    {
        public Guid IdCiudad { get; set; } = Guid.NewGuid();
        public Guid Id { get; set; }
        public string NombreCiudad { get; set; }
        public bool CheckPrincipal { get; set; }
    }

    public class AddUserCiudadesHandler(IGenericRepository<Ciudad> ciu)
    {
        private IGenericRepository<Ciudad> _user { get; } = ciu;

        public void Handle(AddUserCiudadesCommand command)
        {
            _user.Insert(command.Adapt<Ciudad>());
            _user.Save();
        }
    }
}