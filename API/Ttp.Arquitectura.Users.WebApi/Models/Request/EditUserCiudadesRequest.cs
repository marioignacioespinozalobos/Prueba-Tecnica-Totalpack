namespace Ttp.Arquitectura.Users.WebApi.Models.Request
{
    public class EditUserCiudadesRequest
    {
        public Guid IdCiudad { get; set; }
        public string Id { get; set; }
        public string NombreCiudad { get; set; }
        public bool CheckPrincipal { get; set; }
    }
}
