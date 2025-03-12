namespace Ttp.Arquitectura.Users.WebApi.Models.Response
{
    public class GetUserCiudadesResponse
    {
        public Guid IdCiudad { get; set; }
        public string Id { get; set; }
        public string NombreCiudad { get; set; }
        public bool CheckPrincipal { get; set; }        
    }
}
