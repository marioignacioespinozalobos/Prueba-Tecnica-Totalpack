namespace Ttp.Arquitectura.Users.WebApi.Models.Request
{
    public class AddUserDireccionRequest
    {
        public Guid Id { get; set; }
        public string NombreDireccion { get; set; }
        public bool CheckPrincipal { get; set; }
    }
}
