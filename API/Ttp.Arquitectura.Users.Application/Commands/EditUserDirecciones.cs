using Mapster;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;

namespace Ttp.Arquitectura.Users.Application.Commands
{
    public class EditUserDireccionesCommand
    {
        public Guid IdDireccion { get; set; }
        public Guid Id { get; set; }
        public string NombreDireccion { get; set; }
        public bool CheckPrincipal { get; set; }
    }

    public class EditUserDireccionesHandler(IGenericRepository<Direccion> ciu)
    {
        private IGenericRepository<Direccion> _user { get; } = ciu;

        public void Handle(EditUserDireccionesCommand command)
        {
            _user.Update(command.Adapt<Direccion>());
            _user.Save();
        }
    }
}