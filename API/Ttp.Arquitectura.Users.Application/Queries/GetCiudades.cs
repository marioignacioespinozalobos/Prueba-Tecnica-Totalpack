using Mapster;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;
using Ttp.Arquitectura.Users.Domain;

namespace Ttp.Arquitectura.Users.Application.Queries
{
    public class GetCiudadesQuery
    {
        public Guid IdCiudad { get; set; }
        public string Id { get; set; }
        public string NombreCiudad { get; set; }
        public bool CheckPrincipal { get; set; }
    }

    public class GetCiudadesHandler(IGenericRepository<Ciudad> ciu)
    {
        private IGenericRepository<Ciudad> _ciu { get; } = ciu;

        public List<GetCiudadesQuery> Handle(string Id) // Guid id
        {
            return _ciu.Get().Where(Ciudad => Ciudad.Id.Contains(Id.Trim())).ToList().Adapt<List<GetCiudadesQuery>>();
            
        }
    }
   
}