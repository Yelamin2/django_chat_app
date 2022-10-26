from rest_framework import permissions

class IsAuthorOrReadOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
         if request.method in permissions.SAFE_METHODS:
            return True
         if request.method == "POST":
            return True

        # return obj.author == request.user or request.user.is_admin 