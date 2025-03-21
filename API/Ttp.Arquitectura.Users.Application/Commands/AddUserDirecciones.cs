using Mapster;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;

namespace Ttp.Arquitectura.Users.Application.Commands
{
    public class AddUserDireccionesCommand
    {
        public Guid IdDireccion { get; set; } = Guid.NewGuid();
        public Guid Id { get; set; }
        public string NombreDireccion { get; set; }
        public bool CheckPrincipal { get; set; }
    }

    public class AddUserDireccionesHandler(IGenericRepository<Direccion> direc)
    {
        private IGenericRepository<Direccion> _user { get; } = direc;

        public void Handle(AddUserDireccionesCommand command)
        {
            _user.Insert(command.Adapt<Direccion>());
            _user.Save();
        }
    }
}