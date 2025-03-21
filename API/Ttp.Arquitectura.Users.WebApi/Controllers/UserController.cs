using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Runtime.CompilerServices;
using Ttp.Arquitectura.Users.Application.Commands;
using Ttp.Arquitectura.Users.Application.Queries;
using Ttp.Arquitectura.Users.WebApi.Models.Request;
using Ttp.Arquitectura.Users.WebApi.Models.Response;

namespace Ttp.Arquitectura.Users.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController(AddUserHandler addUserHandler, GetUsersHandler getUsersHandler, GetUserIdHandler getUserIdHandler, EditUserHandler editUserHandler, DeleteUserHandler deletetUserHandler, GetDireccionesHandler getDireccionesHandler, EditUserDireccionesHandler editUserDireccionesHandler, AddUserDireccionesHandler addUserDireccionesHandler) : ControllerBase
    {
        // User
        private readonly AddUserHandler _addUserHandler = addUserHandler;
        private readonly EditUserHandler _editUserHandler = editUserHandler;
        private readonly GetUsersHandler _getUsersHandler = getUsersHandler;
        private readonly GetUserIdHandler _getUserIdHandler = getUserIdHandler;
        private readonly DeleteUserHandler _deleteUserHandler = deletetUserHandler;

        // Direcciones
        private readonly GetDireccionesHandler _getDireccionesHandler = getDireccionesHandler;
        private readonly EditUserDireccionesHandler _editUserDireccionesHandler = editUserDireccionesHandler;
        private readonly AddUserDireccionesHandler _addUserDireccionesHandler = addUserDireccionesHandler;


        [HttpGet]
        [Route("GetUserAll")]
        public IActionResult GetUserAll()
        {
            return Ok(_getUsersHandler.Handle().Adapt<List<GetUserResponse>>());
        }

        [HttpGet]
        [Route("GetUserId")]
        public IActionResult GetUserId(string id)
        {
            return Ok(_getUserIdHandler.Handle(Guid.Parse(id)).Adapt<GetUserResponse>());
        }

        [HttpPost]
        [Route("AddUser")]
        public IActionResult AddUser([FromBody] AddUserRequest request)
        {
            _addUserHandler.Handle(request.Adapt<AddUserCommand>());
            return Ok();
        }

        [HttpPost]
        [Route("editUser")]
        public IActionResult EditUser([FromBody] EditUserRequest request)
        {
            _editUserHandler.Handle(request.Adapt<EditUserCommand>());
            return Ok();
        }

        [HttpDelete]
        [Route("DeleteUser")]
        public IActionResult DeleteUser([FromBody] EditUserRequest request)
        {
            _deleteUserHandler.Handle(request.Adapt<DeleteUserCommand>());
            return Ok();
        }

        // Ciudades usuario

        [HttpGet]
        [Route("getUserDireccionesAll")]
        public IActionResult GetUserDireccionesAll(string Id)
        {
            return Ok(_getDireccionesHandler.Handle(Id).Adapt<List<GetUserDireccionResponse>>());            
        }

        [HttpPost]
        [Route("addUserDirecciones")]
        public IActionResult AddUserDirecciones([FromBody] AddUserDireccionRequest request)
        {
            _addUserDireccionesHandler.Handle(request.Adapt<AddUserDireccionesCommand>());
            return Ok();
        }

        [HttpPost]
        [Route("editUserDirecciones")]
        public IActionResult EditUserDirecciones([FromBody] EditUserDireccionRequest request)
        {
            _editUserDireccionesHandler.Handle(request.Adapt<EditUserDireccionesCommand>());
            return Ok();
        }


    }
}
