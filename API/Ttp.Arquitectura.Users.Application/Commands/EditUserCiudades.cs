using Mapster;
using Ttp.Arquitectura.Users.Domain;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;

namespace Ttp.Arquitectura.Users.Application.Commands
{
    public class EditUserCiudadesCommand
    {
        public Guid IdCiudad { get; set; }
        public Guid Id { get; set; }
        public string NombreCiudad { get; set; }
        public bool CheckPrincipal { get; set; }
    }

    public class EditUserCiudadesHandler(IGenericRepository<Ciudad> ciu)
    {
        private IGenericRepository<Ciudad> _user { get; } = ciu;

        public void Handle(EditUserCiudadesCommand command)
        {
            _user.Update(command.Adapt<Ciudad>());
            _user.Save();
        }
    }
}