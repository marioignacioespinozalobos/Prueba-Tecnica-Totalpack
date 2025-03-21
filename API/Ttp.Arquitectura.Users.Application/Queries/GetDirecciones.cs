using Mapster;
using Ttp.Arquitectura.Users.Domain.Interfaces.Repository;
using Ttp.Arquitectura.Users.Domain;
using System.Linq.Expressions;

namespace Ttp.Arquitectura.Users.Application.Queries
{
    public class GetDireccionesQuery
    {
        public string IdDireccion { get; set; }
        public string Id { get; set; }
        public string NombreDireccion { get; set; }
        public bool CheckPrincipal { get; set; }
    }



    public class GetDireccionesHandler(IGenericRepository<Direccion> direccion)
    {
        private IGenericRepository<Direccion> _direc { get; } = direccion;

        public List<GetDireccionesQuery> Handle(string Id)
        {            
            return _direc.Get().ToList().Adapt<List<GetDireccionesQuery>>();
        }
    }  
   
}