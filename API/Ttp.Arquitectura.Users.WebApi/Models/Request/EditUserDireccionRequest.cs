namespace Ttp.Arquitectura.Users.WebApi.Models.Request
{
    public class EditUserDireccionRequest
    {
        public Guid IdDireccion { get; set; }
        public string Id { get; set; }
        public string NombreDireccion { get; set; }
        public bool CheckPrincipal { get; set; }
    }
}
