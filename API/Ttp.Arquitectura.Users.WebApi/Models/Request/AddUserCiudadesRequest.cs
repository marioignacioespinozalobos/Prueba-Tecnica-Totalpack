namespace Ttp.Arquitectura.Users.WebApi.Models.Request
{
    public class AddUserCiudadesRequest
    {
        public Guid Id { get; set; }
        public string NombreCiudad { get; set; }
        public bool CheckPrincipal { get; set; }
    }
}
